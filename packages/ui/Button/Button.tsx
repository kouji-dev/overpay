import * as React from "react";
import {FC, PropsWithChildren, useEffect, useRef} from "react";
import cn from 'classnames';

interface Props {
  type?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  hover?: boolean;
  disabled?: boolean;
  block?: boolean;
}

// function useRipple(ref: React.MutableRefObject<HTMLButtonElement | null>) {
//
//   useEffect(() => {
//     if(ref?.current) {
//       const button = ref.current;
//       button.addEventListener("click", (event) => {
//         console.log(event);
//         const circle = document.createElement("span");
//         const diameter = Math.max(button.clientWidth, button.clientHeight);
//         const radius = diameter / 2;
//         console.log(diameter, radius, `${event.clientX - (button.offsetLeft + radius)}px`, `${event.clientY - (button.offsetTop + radius)}px`)
//         circle.style.width = circle.style.height = `${diameter}px`;
//         circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
//         circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
//         circle.classList.add("ripple");
//
//
//         const ripple = button.getElementsByClassName("ripple")[0];
//
//         if (ripple) {
//           ripple.remove();
//         }
//
//         button.appendChild(circle);
//       })
//     }
//
//     return () => {
//       if(ref?.current) {
//         const button = ref.current;
//         button.removeEventListener("click", () => {})
//       }
//     }
//   }, [ref.current])
// }

export const Button: FC<PropsWithChildren<Props>> = ({
                                                       type= 'primary',
                                                       size = 'sm', active,
                                                       hover,
                                                       disabled,
                                                       children,
                                                       block
}) => {
  const ref = useRef(null);
  // useRipple(ref)
  const rootClassName = 'btn';

  return <button ref={ref} className={cn(rootClassName, `btn-${type}`, `btn-${size}`, {
    [`btn-hover`]: hover,
    [`btn-active`]: active,
    [`btn-disabled`]: disabled,
    [`btn-block`]: block,
  })}>{children}</button>;
};
