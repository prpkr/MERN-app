import ShoppingItem from '../models/ShoppingItem';

interface Props {
	item:ShoppingItem;
	removeItem(id:string):void;
	changeMode(mode:string,index:number):void;
}

const RemoveRow = (props:Props) => {
	
	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count}</td>
			<td>{props.item.price}</td>
			<td><button onClick={() => props.changeMode("cancel",0)} className="btn btn-danger">Cancel</button></td>
			<td><button onClick={() => props.removeItem(props.item.id)} className="btn btn-success">Confirm</button></td>
		</tr>
	)
	
}

export default RemoveRow;