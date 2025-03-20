import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
// import Login from './components/Login'; 
// import Registration from './components/Registration'; 
import Home from './views/Home'; 
import LinearSearch from './views/Linear Search/Linear';
import BinarySearch from './views/Binary Search/Binary';
import TwoPointersTechnique from './views/Two Pointers Technique/Two_Pointers_Technique';
// import AlgorithmVisualizer from "../src/Bubble Sort/AlgorithmVisualizer";
// import QuickSort from "../src/Quick Sort/QuickSort";
// import MergeSort from "../src/Merge Sort/Merge-sort";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Linear_Search" element={<LinearSearch />} /> 
        <Route path="/Binary_Search" element={<BinarySearch />} /> 
        <Route path="/two_pointer" element={<TwoPointersTechnique />} /> 
        {/* <Route path="/Bubble_sorting" element={<AlgorithmVisualizer />} /> 
        <Route path="/Quick_Sorting" element={<QuickSort />} /> 
        <Route path="/merge_Sorting" element={<MergeSort />} />  */}
      </Routes>
    </div>
  );
}

export default App;
