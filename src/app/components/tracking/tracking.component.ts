import { Component, OnInit } from '@angular/core';
import { TrackingObject } from '../../interfaces/interfaces';
import { ComponentsService } from 'src/app/services/components.service';
import * as strings from '../../constants/constants';
import { debug } from 'util';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  strings = strings;
  tracking: TrackingObject[];
  show = false;
  dataSource;
  displayedColumns: string[] = [
    'TIPO_TRACKING',
    'ID_ESTADO_OC',
    // 'DESCRIPCION_ESTADO_OC',
    'FECHA_INTEGRACION',
    'FECHA_EVENTO',
    'ID_ESTADO_HOMOLOGADO',
    // 'DESCRIPCION_ESTADO_HO',
    'USUARIO_CREACION',
    // 'FECHA_CREACION'
  ];

  constructor(private _componentService: ComponentsService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.tracking = this._componentService.tracking.value['Value'];
    this.show = this.tracking && this.tracking.length > 0;
    this.dataSource.data = this.tracking;
  }
}
