import React from 'react';

export interface PerfectProps {
    /**
     * The text of the button.
     */
    lovelyLabel: string;
    /**
     * The color of the button.
     */
    bewitchingBackgroundColor: string;
    /**
     * The size of the button.
     */
    splendidSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
    /**
     * The shape of the button.
     */
    stunningShape: 'edgy' | 'round';
    /**
     * The click event of the button.
     */
    onClick?: () => void;
}

/**
 * This represents a very beautiful button.
 */
export const Button: React.FC<PerfectProps> = ({
                                                   lovelyLabel,
                                                   bewitchingBackgroundColor = 'lightgrey',
                                                   splendidSize = 'M',
                                                   stunningShape = 'edgy',
                                                   onClick}) => {

    const getStyle = (): React.CSSProperties => ({
        backgroundColor: bewitchingBackgroundColor,
        fontSize: splendidSize === 'XXL' ? '100px' : splendidSize === 'XL' ? '80px' : splendidSize === 'L'
            ? '50px' : splendidSize === 'M' ? '30px' : splendidSize === 'S' ? '20px' : '5px',
        borderRadius: stunningShape === 'round' ? '3em' : '0em'
    });

    return (
        <button onClick={onClick} style={getStyle()}>
            {lovelyLabel}
        </button>
    );
};

export default Button;