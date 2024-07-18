import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div id='values' className='mx-8'>
            <div
            className="items-center h-auto bg-white shadow-xl lg:flex md:grid xs:grid xs:grid-cols-2 md:grid-cols-4 lg:p-8 xs:p-0 lg:justify-evenly"
            style={{
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="relative mx-8 text-center xs:my-8 lg:mx-0">
                <div
                    className="absolute inset-0 flex items-center justify-center font-bold lg:text-8xl xs:text-5xl"
                    style={{
                        textShadow: `
              -1px -1px 0 #555353,
              1px -1px 0 #555353,
              -1px 1px 0 #555353,
              1px 1px 0 #555353,
              0 0 20px rgba(0,0,0,0.1)
            `,
                        color: `#faebd7`,
                        opacity: 0.2
                    }}
                >
                    890
                </div>
                <CountUp start={0} end={890} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                        <div className="relative flex lg:gap-3 xs:gap-1">
                            <span className="font-bold lg:text-5xl xs:text-3xl " style={{ color: '#0D3153' }} ref={countUpRef} />
                            <div className="whitespace-pre-line lg:font-medium lg:text-xl" style={{ color: '#0D3153' }}>
                                Delivered{'\n'}Packages
                            </div>
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="relative mx-8 text-center xs:my-8 lg:mx-0">
                <div
                    className="absolute inset-0 flex items-center justify-center font-bold lg:text-8xl xs:text-5xl"
                    style={{
                        textShadow: `
              -1px -1px 0 #555353,
              1px -1px 0 #555353,
              -1px 1px 0 #555353,
              1px 1px 0 #555353,
              0 0 20px rgba(0,0,0,0.1)
            `,
                        color: `#faebd7`,
                        opacity: 0.2
                    }}
                >
                    137
                </div>
                <CountUp start={0} end={137} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                        <div className="relative flex lg:gap-3 xs:gap-1">
                            <span className="font-bold lg:text-5xl xs:text-3xl " ref={countUpRef} style={{ color: '#0D3153' }} />
                            <div className="whitespace-pre-line lg:font-medium lg:text-xl" style={{ color: '#0D3153' }}>
                                Countries{'\n'}Covered
                            </div>
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="relative mx-8 text-center xs:my-8 lg:mx-0">
                <div
                    className="absolute inset-0 flex items-center justify-center font-bold lg:text-8xl xs:text-5xl"
                    style={{
                        textShadow: `
              -1px -1px 0 #555353,
              1px -1px 0 #555353,
              -1px 1px 0 #555353,
              1px 1px 0 #555353,
              0 0 20px rgba(0,0,0,0.1)
            `,
                        color: `#faebd7`,
                        opacity: 0.2
                    }}
                >
                    740
                </div>
                <CountUp start={0} end={740} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                        <div className="relative flex lg:gap-3 xs:gap-1">
                            <span className="font-bold lg:text-5xl xs:text-3xl " ref={countUpRef} style={{ color: '#0D3153' }} />
                            <div className="whitespace-pre-line lg:font-medium lg:text-xl" style={{ color: '#0D3153' }}>
                                Tons of{'\n'}Goods
                            </div>
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="relative mx-8 text-center xs:my-8 lg:mx-0">
                <div
                    className="absolute inset-0 flex items-center justify-center font-bold lg:text-8xl xs:text-5xl"
                    style={{
                        textShadow: `
              -1px -1px 0 #555353,
              1px -1px 0 #555353,
              -1px 1px 0 #555353,
              1px 1px 0 #555353,
              0 0 20px rgba(0,0,0,0.1)
            `,
                        color: `#faebd7`,
                        opacity: 0.2
                    }}
                >
                    600
                </div>
                <CountUp start={0} end={600} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                        <div className="relative flex lg:gap-3 xs:gap-1">
                            <span className="font-bold lg:text-5xl xs:text-3xl " ref={countUpRef} style={{ color: '#0D3153' }} />
                            <div className="whitespace-pre-line lg:font-medium lg:text-xl" style={{ color: '#0D3153' }}>
                                Satisfied{'\n'}Clients
                            </div>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
        </div>
    );
};

export default Stats;
