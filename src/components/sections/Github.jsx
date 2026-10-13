import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useRef } from "react";

export default function GitHubCalendarWidget() {
    const calendarRef = useRef(null);
    useEffect(() => {
        const calendar = calendarRef.current;
        let observer;

        const scrollToLatest = () => {
            const scrollContainer = [...calendar.querySelectorAll("*")].find(
                (element) => element.scrollWidth > element.clientWidth,
            );

            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth;
                observer?.disconnect();
                return true;
            }

            return false;
        };

        if (!scrollToLatest()) {
            observer = new MutationObserver(scrollToLatest);
            observer.observe(calendar, { childList: true, subtree: true });
        }

        return () => observer?.disconnect();
    }, []);

    return (
        <div
            ref={calendarRef}
            className="github-calendar max-w-3xl mx-auto px-6 mt-12"
        >
            <div className="flex flex-row justify-between mb-6">
                <h1 className="text">06 — github</h1>
                <a
                    className="text tab"
                    target="_blank"
                    href="https://github.com/3stannn"
                >
                    @3stannn &#8599;&#xfe0e;
                </a>
            </div>
            <GitHubCalendar
                username="3stannn"
                colorScheme="light"
                theme={{
                    light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
                }}
                blockSize={12}
                blockMargin={4}
                renderBlock={(block, activity) => {
                    return (
                        <g style={{ cursor: "pointer" }}>
                            <rect
                                {...block.props}
                                rx={2}
                                ry={2}
                                data-count={activity.count}
                            />
                        </g>
                    );
                }}
                showTotalCount={true}
                showColorLegend={false}
            />
        </div>
    );
}
