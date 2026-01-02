import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Category } from '../../model/category.model';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  imports: [CommonModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  @Output() categorySelected = new EventEmitter<Category | null>();

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterByCategory(category: Category | null) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
