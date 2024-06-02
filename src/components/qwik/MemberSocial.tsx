import { Slot, component$ } from "@builder.io/qwik";

interface Props {
  icon: string;
  link?: string;
}

export const MemberSocial = component$<Props>((props) => {
  const usingSolidIcons = ["envelope", "globe", "calendar", "clock"].includes(
    props.icon,
  );

  return (
    <div class="social">
      <i
        class={[
          "fa-fw",
          `fa-${props.icon}`,
          usingSolidIcons ? "fa-solid" : "fa-brands",
        ]}
        aria-hidden="true"
      ></i>

      <div class="social-text">
        <span>
          {props.link ? (
            <a href={props.link} target="_blank" class="social-text">
              <Slot />
            </a>
          ) : (
            <Slot />
          )}
        </span>
      </div>
    </div>
  );
});
