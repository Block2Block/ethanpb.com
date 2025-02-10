// Timeline.jsx
import './timeline.scss';
import {ReactNode} from "react";

export interface EventJob {
    title: string;
    date: string;
    description: ReactNode;
}

export interface Event {
    events: EventJob[];
    where: string;
    icon: string;
}

type TimelineProps = {
    events: Event[];
}

export const Timeline = ({ events }: TimelineProps) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"><i className={event.icon}></i></div>
                    <div className="timeline-content">
                        <small>{event.where}</small>
                        {event.events.map((job, index) => (
                            <div key={index}>
                                <p className={"fs-3"}><strong>{job.title}</strong><br/>
                                    {job.date}</p>
                                <p>{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
};