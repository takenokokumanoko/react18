import { Suspense } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { ReactQuery } from './components/ReactQuery';
import { Transition } from './components/Transition';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<p>Loading</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
