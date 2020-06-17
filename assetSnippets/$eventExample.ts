<input [value]="currentItem.name"
       (input)="currentItem.name=$event.target.value" >
without NgModel