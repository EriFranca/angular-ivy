// invoice-tracking-panel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-tracking-panel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InvoiceTrackingPanelComponent {
  // Properties to hold the form data
  invoiceNumber: string;
  customerName: string;
  amountDue: number;

  // Array to hold the invoices
  invoices = [];

  // Method to handle the form submission
  onSubmit() {
    // Add the invoice to the array of invoices
    this.invoices.push({
      invoiceNumber: this.invoiceNumber,
      customerName: this.customerName,
      amountDue: this.amountDue
    });

    // Clear the form fields
    this.invoiceNumber = '';
  }}   