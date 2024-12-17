
### Carlos Ng

## Ejemplo
```typescript
    import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';
```

```typescript
  <ProductCard 
      product={ product } 
      initialValues={{
          count: 4,
          maxCount: 8,
      }} 
  >

      {
          ( { reset, count, increaseBy, isMaxCountReached } ) => (
          <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />                             
          </>
          )
      }

  </ProductCard>
```