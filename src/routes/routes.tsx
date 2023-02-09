import { Navigate, Route, Routes } from "react-router-dom";
function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<h1>Try outs tt</h1>} />
      <Route path=":id">
        <Route index element={<h1>Show</h1>} />
        <Route index path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="/three" element={<h1>Three Placeholder</h1>} />
      <Route path="/storybook" element={<h1>Storybook Placeholder</h1>} />
      <Route path="/monorepo" element={<h1>Monorepo Placeholder</h1>} />
      <Route path="/portfolio" element={<h1>Portfolio Placeholder</h1>} />
      <Route path="/serverless" element={<h1>Serverless Placeholder</h1>} />
      <Route path="/teamxprezzo" element={<h1>Team Exprezzo Placeholder</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesComponent;
