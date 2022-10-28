import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://pyxis.nymag.com/v1/imgs/ff4/55e/8f7498dca1f7e39ac0d46cbcf0994a3b05-Ode-water-shoes.rhorizontal.w700.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481' }
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                        <Product product={product} />
                    </Grid>   
                ))}
            </Grid>
        </main>
    );
}

export default Products;