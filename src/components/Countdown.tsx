/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { FormattedMessage } from "react-intl";

type Unit = "years" | "months" | "days" | "hours" | "minutes" | "seconds";

interface TimeBoxOwnProps {
  num: number;
  unit: Unit;
}

type TimeBoxProps = TimeBoxOwnProps & HTMLAttributes<HTMLDivElement>;

const TimeBox = ({ num, unit, ...rest }: TimeBoxProps) => {
  return (
    <div
      css={css`
        border: 1px solid black;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        min-width: 60px;
        padding-top: 4px 6px 6px 0px;
      `}
      {...rest}
    >
      <div
        css={css`
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          padding: 2px 0;
        `}
      >
        {num}
      </div>
      <div
        css={css`
          text-transform: uppercase;
          font-size: 0.6rem;
          font-weight: 600;
          padding: 2px 0;
        `}
      >
        <FormattedMessage id={unit} values={{ num }} />
      </div>
    </div>
  );
};

function Countdown({ countdown }: { countdown: number }) {
  const secondsInDay = 24 * 60 * 60;
  const secondsInHour = 60 * 60;
  const secondsInMinute = 60;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (countdown > 0) {
    days = Math.floor(countdown / secondsInDay);
    let restTime = countdown % secondsInDay;
    hours = Math.floor(restTime / secondsInHour);
    restTime = countdown % secondsInHour;
    minutes = Math.floor(restTime / secondsInMinute);
    seconds = countdown % secondsInMinute;
  }

  const TimeBoxWrapper = styled.div`
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  `;

  return (
    <div>
      <p
        css={css`
          text-transform: uppercase;
          display: inline-block;
          letter-spacing: 3px;
          font-size: 0.8rem;
          padding: 6px 0;
        `}
      >
        <FormattedMessage id="startsIn" />
      </p>
      <div
        css={css`
          display: flex;
        `}
      >
        <TimeBoxWrapper>
          <TimeBox id="days" num={days} unit="days" />
        </TimeBoxWrapper>
        <TimeBoxWrapper>
          <TimeBox id="hours" num={hours} unit="hours" />
        </TimeBoxWrapper>
        <TimeBoxWrapper>
          <TimeBox id="minutes" num={minutes} unit="minutes" />
        </TimeBoxWrapper>
        <TimeBoxWrapper>
          <TimeBox id="seconds" num={seconds} unit="seconds" />
        </TimeBoxWrapper>
      </div>
    </div>
  );
}

export default Countdown;
