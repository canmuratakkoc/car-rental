import { Component, OnDestroy, OnInit } from '@angular/core';
import { brands } from '../_model/brands/brands';
import { DataTablesModule } from 'angular-datatables'
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { GetService } from '../_service/get.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DeleteService } from '../_service/delete.service';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
})
export class BrandListComponent implements OnInit {

  brandList!: brands[];
  dtoptions: Config={};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: GetService, private deleteService: DeleteService, private router: Router) {}

  ngOnInit(): void {
    this.loadBrands();
    this.dtoptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 15, 20, 25],
      pageLength: 5,
      ordering: false,
      order: [0, 'desc'],
      language: {
        search: 'Ara',
        searchPlaceholder: 'Aranacak kelimeyi yazın...',
        emptyTable: 'Tabloda herhangi bir veri mevcut değil',
        info: '_TOTAL_ kayıttan _START_ - _END_ arası gösteriliyor',
        infoEmpty: 'Kayıt bulunmuyor',
        infoFiltered: '(_MAX_ kayıt içerisinden filtrelenen)',
        lengthMenu: '_MENU_ kayıt göster',
        loadingRecords: 'Yükleniyor...',
        processing: 'İşleniyor...',
        zeroRecords: 'Eşleşen kayıt bulunamadı',
        paginate: {
          first: 'İlk',
          last: 'Son',
          next: 'Sonraki',
          previous: 'Önceki'
        },
        aria: {
          sortAscending: ': artan sıralama aktif',
          sortDescending: ': azalan sıralama aktif'
        }
      }
    };
  }

  loadBrands() {
    this.service.LoadItems('CarBrands').subscribe(item => {
      this.brandList = item;
      this.dtTrigger.next(null);
    })
  }

  navigateToEdit(itemId: string) {
    this.router.navigate([`brand-edit`, itemId]);
  }

  deleteItem(itemId: string) {
    return this.deleteService.DeleteItem('CarBrands', itemId);
  }

  deleteMethod(itemId: string) {
    Swal.fire({
      title: 'Emin misiniz?',
      text: 'Silmek istediğiniz veri geri alınamaz.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet, sil!',
      cancelButtonText: 'Hayır, iptal et!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(itemId).subscribe(() => {
          Swal.fire(
            'Silindi!',
            'Veri başarıyla silindi.',
            'success'
          ).then(() => {
            window.location.reload();
          })
        }, error => {
          Swal.fire(
            'Hata!',
            'Veri silinirken bir hata oluştu.',
            'error'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'İptal edildi',
          'Veri silme işlemi iptal edildi.',
          'error'
        );
      }
    });
  }
}
