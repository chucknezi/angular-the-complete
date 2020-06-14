<h1>Learn Angular 8</h1>
<p>A JavaScript Framework for creating Reactive Single Page Applications (SPA).</p>

<h3>Features</h3>
<ul>
  <li>TypeScript - A superset of js.</li>
</ul>

<h3>Section 2: The Basics</h3>
<ul>
  <li>Module</li>
  <li>Components</li>
  <li>Databinding</li>
</ul>

<h4>Databinding Explained</h4>
<img src="assets/dataBindingNotes.png" alt="dBNotes">

<h4>Property Binding Deep Dive</h4>

<ul>
<li
>Use property binding to set properties of target elements or directive @Input() decorators</li>

<li>You can't use property binding to read or pull values out of target elements. Similarly, you cannot use property binding to call a method on the target element. </li>
</ul>

<h5>Documentation Examples</h5>
<p>The most common property binding sets an element property to a component property value. An example is binding the src property of an image element to a component's itemImageUrl property:</p>

## Example 1

```ts
// assetSnippets/propertyBindingExOne.ts

<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>
```

<p>
Here's an example of binding to the colSpan property. Notice that it's not colspan, which is the attribute, spelled with a lowercase s.
</p>

## Example 2
```ts
//assetSnippets/propertyBindingExOne.ts

<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>
```
<p>
Another example is disabling a button when the component says that it isUnchanged:
</p>

## Example 3
```ts
//assetSnippets/propertyBindingExOne.ts

<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>
```
<p>Another is setting a property of a directive:</p>

## Example 4
```ts
//assetSnippets/propertyBindingExOne.ts

<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>
```
<p>Yet another is setting the model property of a custom component—a great way for parent and child components to communicate:</p>

## Example 5
```ts
//assetSnippets/propertyBindingExOne.ts

<img [src]="itemImageUrl">

<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="2">Span 2 columns</td></tr>

<button [disabled]="isUnchanged">Disabled Button</button>

<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>

<app-item-detail [childItem]="parentItem"></app-item-detail>
```