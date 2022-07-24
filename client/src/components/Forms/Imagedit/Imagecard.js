import Card from 'react-bootstrap/Card';
const Imagecard = ({imgRef,image}) => {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    {imgRef}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Imagecard;