import { Button } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { VscDebugPause } from 'react-icons/vsc';
import { StyledButtonContent, StyledButtonText } from './common';

export default function StatPauseBtn() {
    return <Button variant='light'>
        <StyledButtonContent>
            <IconContext.Provider value={{ color: "#b53142", className: "global-class-name" }}>
                <VscDebugPause size='2rem' />
            </IconContext.Provider>
            <StyledButtonText>Pause</StyledButtonText> </StyledButtonContent>
    </Button>
}