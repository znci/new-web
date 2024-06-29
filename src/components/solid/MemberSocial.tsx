import type { JSX } from "solid-js/jsx-runtime";

export function MemberSocial(props: {
  icon: string;
  link?: string;
  children: JSX.Element;
}) {
  const usingSolidIcons = ["envelope", "globe", "calendar", "clock"].includes(
    props.icon,
  );

  return (
    <div class="social">
      <i
        class="fa-fw"
        classList={{
          [`fa-${props.icon}`]: true,
          "fa-solid": usingSolidIcons,
          "fa-brands": !usingSolidIcons,
        }}
        aria-hidden="true"
      ></i>

      <div class="social-text">
        <span>
          {props.link ? (
            <a href={props.link} target="_blank" class="social-text">
              {props.children}
            </a>
          ) : (
            props.children
          )}
        </span>
      </div>
    </div>
  );
}
