import { fireEvent } from '@testing-library/dom';

interface Delta {
  x: number;
  y: number;
}

interface To {
  to?: HTMLElement;
  delta?: Delta;
  steps?: number;
  duration?: number;
}

function getElementClientCenter(element: HTMLElement) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  } as Delta;
}

const getCoords = (charlie: HTMLElement | undefined) =>
  getElementClientCenter(charlie as HTMLElement);

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export async function drag(
  element: HTMLElement,
  { to: inTo, delta, steps = 20, duration = 500 }: To
) {
  const from = getElementClientCenter(element);
  const to: Delta = delta
    ? {
        x: from.x + delta.x,
        y: from.y + delta.y,
      }
    : getCoords(inTo);

  const step = {
    x: (to.x - from.x) / steps,
    y: (to.y - from.y) / steps,
  };

  const current = {
    clientX: from.x,
    clientY: from.y,
  };

  fireEvent.mouseEnter(element, current);
  fireEvent.mouseOver(element, current);
  fireEvent.mouseMove(element, current);
  fireEvent.mouseDown(element, current);
  for (let i = 0; i < steps; i++) {
    current.clientX += step.x;
    current.clientY += step.y;
    await sleep(duration / steps);
    fireEvent.mouseMove(element, current);
  }
  fireEvent.mouseUp(element, current);
}
