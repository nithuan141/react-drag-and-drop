import { DragSource } from 'react-dnd';

class MySource {
  render(){
        return <span>♘</span>;
  }
}

export default DragSource()(MySource);