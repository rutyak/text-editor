import './App.css';
import WritePostUI from './components/writepost/WritePostUI';
import Sidebar from './components/Sidebar';
import PostPreview from './components/preview/PostPreview';
import { useState } from 'react';

function App() {
  const [editorContent, setEditorContent] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-between items-center mobile:flex-col xl:flex-row">
      <Sidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
      <WritePostUI setEditorContent={setEditorContent} menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
      <PostPreview content={editorContent}/>
    </div>
  );
}

export default App;
