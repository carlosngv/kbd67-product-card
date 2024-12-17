import * as React from 'react';
import renderer from "react-test-renderer";

// import {render, screen } from '@testing-library/react'

import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe( 'ProductCard', () => {
    test('should show component with img', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard> 
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('should increment counter', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ( { count, increaseBy } ) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button
                                onClick={ () => increaseBy(1) }
                            >Increase</button>
                        </>
                    )
                }
            </ProductCard> 
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();
    });

});
