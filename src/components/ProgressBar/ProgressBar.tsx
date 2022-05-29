import { FC } from "react";
import { ProgressBarContainer, ProgressTransition } from "../../styles";

interface ProgressBarProps {
    transitionValue: number;
    sizeBar: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ transitionValue, sizeBar }) => {
    const total_transition_bar_width = 273;
    const progress_width = (total_transition_bar_width / sizeBar );
    const transition_width = transitionValue * progress_width; 

    return (
        <ProgressBarContainer>
            <ProgressTransition style={{ width: (progress_width), transform: `translate(${transition_width}px, 0)` }} />
        </ProgressBarContainer>
    )
}
