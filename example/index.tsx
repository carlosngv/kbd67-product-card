import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const App = () => {
  return (
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
