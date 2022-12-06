import Button from 'react-bootstrap/Button';

export default function Buttons({ putStatus }) {
    return (
        <div className="buttons">
            <Button onClick={putStatus} variant="success">Submit changes</Button>
        </div>
    );
};