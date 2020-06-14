<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>