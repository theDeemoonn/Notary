import {useEffect} from 'react';
import {Button} from "react-bootstrap";

// import './_ScrollUp.scss';

function ScrollUp() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div>
            <Button variant="outline-primary" style={
                {
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    fontSize: '30px',
                }
            }
                    onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}
            >
                &#8679;
            </Button>
        </div>
    );
}

export default ScrollUp;
