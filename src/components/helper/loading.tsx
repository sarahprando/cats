import React from 'react';
import styles from './loading.module.css';

const Loading = ({ modal }: { modal?: boolean }) => {
    const [step, setStep] = React.useState(0);

    React.useEffect(() => {
        function updateStep() {
            setStep((step) => {
                if (step < 3) return step + 1;
                else return 0;
            });
        }
        const interval = setInterval(updateStep, 300);
        return () => {
            clearInterval(interval);
        };
    }, []);

    function displayStep(i: number) {
        return {
            display: step === i ? 'block' : 'none',
        };
    }

    return (
        <div className={modal ? styles.wrapper : styles.wrapperNoModal}>
            <div className={styles.loading}>
                <svg
                    width="46"
                    height="31"
                    viewBox="0 0 46 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* STEP 0 - cauda central */}
                    <g style={displayStep(0)}>
                        <path
                            d="M6 15 L2 10 L2 20 Z"
                            fill="#333"
                        />
                        <ellipse cx="20" cy="15" rx="12" ry="7" fill="#333" />
                        <circle cx="25" cy="13" r="2" fill="white" />
                    </g>

                    {/* STEP 1 - cauda levemente para cima */}
                    <g style={displayStep(1)}>
                        <path
                            d="M6 15 L2 8 L2 18 Z"
                            fill="#333"
                        />
                        <ellipse cx="20" cy="15" rx="12" ry="7" fill="#333" />
                        <circle cx="25" cy="13" r="2" fill="white" />
                    </g>

                    {/* STEP 2 - cauda levemente para baixo */}
                    <g style={displayStep(2)}>
                        <path
                            d="M6 15 L2 12 L2 22 Z"
                            fill="#333"
                        />
                        <ellipse cx="20" cy="15" rx="12" ry="7" fill="#333" />
                        <circle cx="25" cy="13" r="2" fill="white" />
                    </g>

                    {/* STEP 3 - volta ao normal */}
                    <g style={displayStep(3)}>
                        <path
                            d="M6 15 L2 10 L2 20 Z"
                            fill="#333"
                        />
                        <ellipse cx="20" cy="15" rx="12" ry="7" fill="#333" />
                        <circle cx="25" cy="13" r="2" fill="white" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Loading;