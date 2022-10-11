import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PageReqSuccess } from "./pages/req-success/PageReqSuccess";
import { PageReqError } from "./pages/req-error/PageReqError";
import { PageReqRetries } from "./pages/req-retries/PageReqRetries";
import { PageReqSuspense } from "./pages/suspense/PageReqSuspense";
import { PageReqConcurency } from "./pages/concurrency/PageReqConcurency";
import { PageCacheInvalidation } from "./pages/cache-invalidation/PageCacheInvalidation";
import { PageOutOfOrder } from "./pages/out-of-order/PageOutOfOrder";
import { PageCustomHook } from "./pages/custom-hook/PageCustomHook";
import { ExampleList } from "./pages/ExampleList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ExampleList />} />
            <Route path="req-success" element={<PageReqSuccess />} />
            <Route path="req-error" element={<PageReqError />} />
            <Route path="req-retries" element={<PageReqRetries />} />
            <Route path="suspense" element={<PageReqSuspense />} />
            <Route path="concurrency" element={<PageReqConcurency />} />
            <Route path="out-of-order" element={<PageOutOfOrder />} />
            <Route path="custom-hook" element={<PageCustomHook />} />
            <Route
              path="cache-invalidation"
              element={<PageCacheInvalidation />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
