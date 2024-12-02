import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout";
import CreatePost from "./comonents/pages/create-post";
import UpdatePost from "./comonents/pages/update-post";
import NoPage from "./comonents/no-page";
import ReactQuery from "./comonents/react-query";
import DeletePost from "./comonents/pages/delete-post";


function App() {
  const queryClient = new QueryClient(); 
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ReactQuery />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="update-post" element={<UpdatePost />} />
        <Route path="delete-post" element={<DeletePost />} />
      
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  );
}

export default App;
