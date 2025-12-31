import {
  Container,
  Grid,
  Box,
} from '@mui/material';

import useProductActions from './hook/useProductActions';
import ProductCard from '../product_card/ProductCard';


const ProductTable = () => {

  const { products } = useProductActions();

  return (

    <Box>

      <Container>

        <Grid container spacing={4}>

          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </Grid>

      </Container>

    </Box>

  );
};

export default ProductTable;