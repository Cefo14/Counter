import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CounterBox from '../../components/CounterBox';
import './Counter.css';

export default class Counter extends PureComponent {
    /**
     * addDays: 
     * represents how many days will be added to start the counter
     * by default its value is 1
     */
    static propTypes = {
        addDays: PropTypes.number,
    }

    static defaultProps = {
        addDays: 1,
    }
    /**
     * 
     * @param  {...any} props 
     * the only state that I declare is 'addDays' 
     * this state is subtracted a second each interval
     */
    constructor(...props) {
        super(...props);
        const { addDays } = this.props;

        /* const for the intervals */
        this.second = 1000;

        this.now = new Date();
        /* reset time to 00:00:00 */
        this.now.setHours(0,0,0,0);

        const afterDate = new Date(this.now);
        /* reset time to 00:00:00 */
        afterDate.setHours(0,0,0,0);
        /* add days to todays date  */
        afterDate.setDate( afterDate.getDate() + addDays );
        
        this.state = {
            afterDate,
        };
    }

    /* start inverval */
    componentDidMount() {
        setInterval(this.startCounter, this.second);
    }

    /**
     * this function manages the state through the intervals
     */
    startCounter = () => {
        const { afterDate } = this.state;
        const newAfterDate = new Date(afterDate);

        /* subtract a second the future date */
        newAfterDate.setTime( newAfterDate.getTime() - this.second );

        if (newAfterDate.getTime() < this.now.getTime()) {
            this.endCounter();
        }

        else {
            this.setState({ afterDate:newAfterDate });
        }
    }

    /**
     * this function clear the interval
     */
    endCounter = () => {
        clearInterval(this.startCounter);
    }

    /**
     * @returns {Object}
     * this function transform afterDate to object
     */
    getParams = () => {
        const { afterDate } = this.state;
        const days = afterDate.getDate() - this.now.getDate();
        const hours = afterDate.getHours();
        const minutes = afterDate.getMinutes();
        const seconds = afterDate.getSeconds();
        return { days, hours, minutes, seconds };
    }

    render() {
        const { days, hours, minutes, seconds } = this.getParams();
        return(
            <div className="counter">
                <div className="counter_counter-box">
                    <CounterBox
                        label="Days"
                        value={days}
                    />
                    <CounterBox
                        label="Hours"
                        value={hours}
                    />
                    <CounterBox
                        label="Minutes"
                        value={minutes}
                    />
                 <CounterBox
                        label="Seconds"
                        value={seconds}
                    />
                </div>
            </div>
        )
    }
}
