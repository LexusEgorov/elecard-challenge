import TreeNode from './tree-node/tree-node';

type TreeProps = {
  treeData: any,
  setImg: React.Dispatch<React.SetStateAction<string>>,
  modalToggler: React.Dispatch<React.SetStateAction<boolean>>,
}

function Tree({treeData, setImg, modalToggler} : TreeProps) : JSX.Element {
  return(
    <ul className="tree align-self-start">
      {
        treeData.map((node : any) => <TreeNode node={node} key={node.id} setImg={setImg} modalToggler={modalToggler}/>)
      }
    </ul>
  );
}

export default Tree;
