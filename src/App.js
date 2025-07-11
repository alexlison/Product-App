import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import SearchProduct from './Components/SearchProduct';
import DeleteProduct from './Components/DeleteProduct';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
    <div>
      <AddProduct />
      <SearchProduct />
      <DeleteProduct />
      <ViewProduct />
  
    </div>
  );
}

export default App;
