import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  @Input() data!: any;
  constructor() {}

  ngOnInit(): void {}
}
