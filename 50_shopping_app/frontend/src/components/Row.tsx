import ShoppingItem from '../models/ShoppingItem';

interface Props {
	item:ShoppingItem;
	index:number;
	changeMode(mode:string,index:number):void;
}

const Row = (props:Props) => {
	
	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count}</td>
			<td>{props.item.price}</td>
			<td><button onClick={() => props.changeMode("remove",props.index)} className="btn btn-danger">Remove</button></td>
			<td><button onClick={() => props.changeMode("edit",props.index)} className="btn btn-secondary">Edit</button></td>
		</tr>
	)
	
}

export default Row;