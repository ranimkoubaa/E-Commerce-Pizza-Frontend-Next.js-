/*'use client'
import EditPizza from '@/app/components/admin/editPizzaComponent';

const ProductUpdatePage = () => {
  return (
    <div>
      <EditPizza />
    </div>
  );
};

export default ProductUpdatePage;
*/
'use client'
import EditPizza from '@/app/components/admin/editPizzaComponent';

const ProductUpdatePage = (context) => {
  return (
    <div>
      <EditPizza  pizzaId={context.params.id}/>
    </div>
  );
};
export default ProductUpdatePage;