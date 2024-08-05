/* eslint-disable max-len */
import { colors } from '@/styles/colors';

const getViewBox = (name: string) => {
  switch (name) {
    default:
      return '0 0 24 24';
  }
};

const getPath = (name: string, props: any) => {
  const {
    fill,
    // , stroke, stopColor, iconprimary
  } = props;
  switch (name) {
    case 'logo-icon':
      return (
        <>
          <rect width={20} height={20} x={4} y={4} fill='#000' rx={10} />
          <path
            fill='#fff'
            d='m15.024 10.664-.285-.018c-.665 0-1.199.23-1.602.688-.392.447-.587 1.205-.587 2.275 0 1.058.148 1.864.445 2.416.308.553.895.83 1.762.83.403 0 1.257-.271 2.563-.812.296.412.456.84.48 1.287-.652.4-1.293.712-1.922.935-.617.223-1.056.335-1.317.335-1.46 0-2.551-.394-3.275-1.181-.724-.8-1.086-1.917-1.086-3.351 0-3.245 1.478-4.868 4.432-4.868.51 0 1.032.065 1.566.194.546.118.973.27 1.282.459-.036 1.175-.166 2.028-.392 2.557-.391.094-.943.141-1.655.141l-.41-1.887Z'
          />
          <path
            fill='#000'
            d='M41.575 12.13h-1.55a2.37 2.37 0 0 0-.93-1.517 2.574 2.574 0 0 0-.791-.398 3.086 3.086 0 0 0-.92-.134c-.586 0-1.112.148-1.576.442-.46.295-.825.728-1.093 1.298-.266.57-.398 1.266-.398 2.088 0 .829.132 1.528.398 2.098.268.57.634 1.001 1.098 1.293.464.291.986.437 1.566.437.322 0 .627-.043.915-.129.292-.09.555-.22.79-.393a2.379 2.379 0 0 0 .94-1.496l1.551.005c-.083.5-.243.96-.482 1.382a3.812 3.812 0 0 1-.91 1.084 4.115 4.115 0 0 1-1.263.7 4.67 4.67 0 0 1-1.55.25c-.882 0-1.668-.21-2.357-.627-.69-.421-1.233-1.023-1.63-1.805-.395-.782-.593-1.715-.593-2.799 0-1.087.2-2.02.597-2.799.398-.782.941-1.382 1.63-1.8.69-.42 1.474-.631 2.352-.631.54 0 1.044.078 1.512.234.47.152.893.377 1.267.676.375.295.685.656.93 1.084.245.424.411.91.497 1.456Zm4.936 7.024c-.716 0-1.34-.164-1.875-.492a3.319 3.319 0 0 1-1.242-1.377c-.295-.59-.443-1.28-.443-2.068 0-.793.148-1.485.443-2.079a3.312 3.312 0 0 1 1.242-1.382c.534-.328 1.159-.492 1.875-.492s1.34.164 1.874.492c.534.329.948.79 1.243 1.383.295.593.443 1.286.443 2.078 0 .788-.148 1.478-.443 2.068a3.319 3.319 0 0 1-1.243 1.377c-.533.328-1.158.492-1.874.492Zm.005-1.248c.464 0 .848-.122 1.153-.368.305-.245.53-.571.676-.98.15-.407.224-.856.224-1.346 0-.488-.075-.935-.224-1.343a2.187 2.187 0 0 0-.676-.989c-.305-.249-.69-.373-1.153-.373-.468 0-.855.124-1.163.373a2.221 2.221 0 0 0-.682.99 3.96 3.96 0 0 0-.218 1.342c0 .49.072.94.218 1.347.15.408.377.734.681.98.309.245.697.367 1.164.367Zm6.7-3.44V19H51.73v-7.636h1.427v1.242h.094c.176-.404.45-.729.825-.974.378-.245.854-.368 1.427-.368.52 0 .976.11 1.367.328.392.216.695.537.91.965.216.427.323.956.323 1.586V19h-1.486v-4.678c0-.554-.144-.986-.433-1.298-.288-.315-.684-.472-1.188-.472-.345 0-.651.074-.92.224-.265.149-.475.367-.631.656-.153.285-.229.63-.229 1.034Zm8.367 0V19h-1.486v-7.636h1.427v1.242h.094c.176-.404.451-.729.825-.974.378-.245.854-.368 1.427-.368.52 0 .977.11 1.368.328.39.216.694.537.91.965.215.427.323.956.323 1.586V19h-1.487v-4.678c0-.554-.144-.986-.432-1.298-.289-.315-.685-.472-1.189-.472-.344 0-.651.074-.92.224a1.61 1.61 0 0 0-.63.656c-.153.285-.23.63-.23 1.034Zm10.172 4.688c-.752 0-1.4-.16-1.944-.482a3.272 3.272 0 0 1-1.252-1.367c-.292-.59-.438-1.281-.438-2.073 0-.783.146-1.472.438-2.069a3.398 3.398 0 0 1 1.233-1.397c.53-.334 1.15-.502 1.859-.502.43 0 .848.072 1.253.214.404.143.767.366 1.089.671.321.305.575.701.76 1.188.186.484.279 1.073.279 1.765v.527h-6.07v-1.113h4.613c0-.392-.08-.738-.239-1.04a1.803 1.803 0 0 0-.67-.72 1.875 1.875 0 0 0-1.005-.264 1.94 1.94 0 0 0-1.094.308 2.07 2.07 0 0 0-.716.796 2.296 2.296 0 0 0-.248 1.059v.87c0 .51.09.944.268 1.302.182.358.436.632.76.82.326.186.705.28 1.14.28.281 0 .538-.04.77-.12a1.599 1.599 0 0 0 .99-.97l1.406.254a2.547 2.547 0 0 1-.606 1.089 2.94 2.94 0 0 1-1.09.72c-.433.17-.929.254-1.486.254Zm8.142 0c-.739 0-1.375-.167-1.909-.502a3.326 3.326 0 0 1-1.223-1.397c-.285-.593-.427-1.273-.427-2.038 0-.776.146-1.46.437-2.054a3.352 3.352 0 0 1 1.233-1.397c.53-.334 1.155-.502 1.875-.502.58 0 1.097.108 1.55.323.455.213.821.51 1.1.895.281.385.449.834.502 1.348h-1.447a1.734 1.734 0 0 0-.547-.925c-.282-.259-.66-.388-1.133-.388-.415 0-.778.11-1.09.328-.308.216-.548.524-.72.925-.172.398-.259.868-.259 1.412 0 .557.085 1.037.254 1.442.169.404.407.717.716.94.311.221.678.332 1.099.332.281 0 .536-.051.765-.154.232-.106.426-.257.582-.452.159-.196.27-.431.333-.706h1.447a2.81 2.81 0 0 1-.483 1.322 2.775 2.775 0 0 1-1.079.915c-.447.222-.972.333-1.576.333Zm8.292-7.79v1.193h-4.171v-1.193h4.17Zm-3.053-1.83h1.487v7.224c0 .288.043.505.13.651.085.143.196.24.332.293.14.05.29.075.453.075.119 0 .223-.008.313-.025.09-.016.159-.03.209-.04l.268 1.228a2.495 2.495 0 0 1-.368.1c-.159.036-.358.056-.596.06a2.615 2.615 0 0 1-1.094-.21 1.876 1.876 0 0 1-.82-.675c-.21-.305-.314-.688-.314-1.149V9.534Z'
          />
        </>
      );
    case 'sidebar-icon':
      return (
        <>
          <path
            fill='#000'
            fillOpacity={0.5}
            fillRule='evenodd'
            d='M19 7H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM8 10a1 1 0 0 1 1-1h2v10H9a1 1 0 0 1-1-1v-8Zm5 9h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6v10Z'
            clipRule='evenodd'
          />
        </>
      );
    case 'started-icon':
      return (
        <>
          <path
            fill={fill}
            d='M10.416 4.589 8.66 6.345a.924.924 0 0 1-.653.27H1.886C1.128 6.615.75 6.237.75 5.48V2.83c0-.758.378-1.137 1.136-1.137h2.71V.462c0-.253.21-.462.462-.462s.461.21.461.462v1.23h2.488c.245 0 .48.098.653.27l1.756 1.757c.241.24.241.63 0 .87Zm-3.512 6.488H5.52V7.538h-.923v3.539H3.212a.462.462 0 0 0 0 .923h3.692a.462.462 0 0 0 0-.923Z'
          />
        </>
      );
    case 'inbox-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M10 0H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 7H8.5a.5.5 0 0 0-.5.5V9H4V7.5a.5.5 0 0 0-.5-.5H2V2h8v5Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'unassign-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm.005 3a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM6 11.1a5.074 5.074 0 0 1-3.444-1.344c.264-.828.948-1.614 2.418-1.614h2.052c1.464 0 2.148.792 2.418 1.614A5.074 5.074 0 0 1 6 11.1Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'all-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M10.358 4.323c-.174.545-.62.988-1.166 1.159a1.852 1.852 0 0 1-2.146-.77.17.17 0 0 1 0-.174c.248-.443.389-.955.389-1.502 0-.19-.017-.375-.05-.556a.17.17 0 0 1 .054-.16 1.8 1.8 0 0 1 1.167-.427 1.848 1.848 0 0 1 1.752 2.43Zm-.867 2.016H8.36a.168.168 0 0 0-.171.171c0 .046.017.091.051.12l.017.017c.8.772 1.172 1.874 1.172 2.972 0 .211-.012.417-.046.605a.298.298 0 0 0-.008.07c0 .097.076.17.168.17h.834c1.046 0 1.623-.571 1.623-1.611 0-1.16-.657-2.514-2.509-2.514ZM4.291.75a2.285 2.285 0 1 0 0 4.57 2.285 2.285 0 0 0 0-4.57ZM5.43 6.464H3.143C.823 6.464 0 8.161 0 9.62c0 1.302.691 1.988 2 1.988h4.571c1.309 0 2-.686 2-1.988 0-1.458-.822-3.155-3.142-3.155Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'contact-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              fillRule='evenodd'
              d='M9.368 12H2.631a1.666 1.666 0 0 1-1.64-1.368L.022 5.31a1.333 1.333 0 0 1 .465-1.268L4.941.38a1.667 1.667 0 0 1 2.118 0l4.455 3.662c.374.307.551.792.464 1.268l-.97 5.322A1.667 1.667 0 0 1 9.368 12ZM6 6.533a1.435 1.435 0 0 0 0-2.867 1.435 1.435 0 0 0 0 2.867ZM8.333 9.13v.202c0 .184-.15.333-.333.333H4a.333.333 0 0 1-.334-.333V9.13c0-.893.654-1.798 1.906-1.798h.855c1.252 0 1.906.904 1.906 1.798Z'
              clipRule='evenodd'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'insight-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M11.802 5.234a.812.812 0 0 1-.613.28H7.292a.806.806 0 0 1-.805-.806V.81a.811.811 0 0 1 .916-.803 5.41 5.41 0 0 1 4.59 4.59.801.801 0 0 1-.191.636ZM10.528 7.04a.783.783 0 0 0-.608-.29H6.06a.812.812 0 0 1-.81-.81V2.08a.784.784 0 0 0-.29-.61.761.761 0 0 0-.63-.158A5.436 5.436 0 0 0 .89 3.636 5.422 5.422 0 0 0 .12 7.76c.424 2.04 2.08 3.695 4.12 4.12.385.08.771.12 1.153.12a5.366 5.366 0 0 0 2.97-.889 5.438 5.438 0 0 0 2.324-3.44.749.749 0 0 0-.159-.63Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'bug-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M12 11.21a.462.462 0 0 1-.924 0c0-.763-.621-1.384-1.384-1.384h-.423A3.687 3.687 0 0 1 6.68 11.76a.189.189 0 0 1-.218-.186v-4.67A.465.465 0 0 0 6 6.441a.465.465 0 0 0-.461.461v4.671a.189.189 0 0 1-.219.186 3.687 3.687 0 0 1-2.588-1.934h-.424c-.763 0-1.385.621-1.385 1.385a.462.462 0 0 1-.923 0 2.31 2.31 0 0 1 2.308-2.308h.088a3.683 3.683 0 0 1-.088-.769v-.769H.462a.462.462 0 0 1 0-.923h1.846V5.057c0-.056.008-.104.01-.158A2.29 2.29 0 0 1 .22 3.323l-.196-.58A.462.462 0 0 1 .9 2.448l.197.584c.182.56.699.938 1.287.948l.162.002c.281-.512.816-.771 1.609-.771h3.692c.793 0 1.327.26 1.609.77l.162-.001a1.371 1.371 0 0 0 1.285-.942l.198-.59a.462.462 0 0 1 .875.295l-.196.585a2.29 2.29 0 0 1-2.097 1.57c.002.055.01.103.01.16v1.384h1.847a.462.462 0 0 1 0 .923H9.692v.77c0 .264-.035.52-.088.768h.088a2.31 2.31 0 0 1 2.307 2.308ZM4.42 2.289h3.16c.12 0 .216-.114.18-.229A1.84 1.84 0 0 0 6 .75a1.84 1.84 0 0 0-1.761 1.31c-.035.114.061.228.18.228Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'question-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm.012 9.3a.603.603 0 0 1-.603-.6c0-.331.266-.6.597-.6h.006a.6.6 0 1 1 0 1.2Zm.95-2.983c-.439.294-.52.458-.535.5a.45.45 0 1 1-.854-.286c.109-.324.39-.63.887-.962.613-.41.534-.86.508-1.008a1 1 0 0 0-.786-.795.97.97 0 0 0-.81.212 1 1 0 0 0-.357.768.45.45 0 0 1-.9 0c0-.565.248-1.096.679-1.457.427-.358.99-.507 1.544-.409.76.134 1.384.763 1.517 1.527.132.757-.186 1.436-.893 1.91Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'feedback-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM4.2 8.37c0 .1-.08.18-.18.18h-.396a.474.474 0 0 1-.474-.474v-2.22c0-.261.213-.474.474-.474h.396c.1 0 .18.08.18.18V8.37ZM8.771 6l-.636 1.902c-.126.384-.264.648-.9.648H4.98a.18.18 0 0 1-.18-.18V5.213c0-.02.003-.038.01-.057l.65-1.982a.504.504 0 0 1 .75-.24c.264.174.42.474.42.792v1.026h1.242c.948 0 1.104.636.9 1.248Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'support-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill={fill}
              d='M3.828 4.458c-.012-.006-.018-.018-.03-.024l-2.34-2.346A5.942 5.942 0 0 0 0 6c0 1.494.546 2.862 1.458 3.912l2.34-2.346c.006-.012.018-.018.03-.024A2.68 2.68 0 0 1 3.336 6c0-.57.186-1.11.492-1.542ZM6 0a5.952 5.952 0 0 0-3.906 1.452l2.34 2.346c.012.012.018.024.024.036A2.629 2.629 0 0 1 6 3.336a2.7 2.7 0 0 1 1.548.492.105.105 0 0 1 .024-.03l2.34-2.346A5.944 5.944 0 0 0 6 0Zm4.548 2.088-2.34 2.346c-.012.006-.018.018-.03.024.306.432.492.972.492 1.542 0 .57-.186 1.11-.492 1.542a.105.105 0 0 1 .03.024l2.34 2.346A5.968 5.968 0 0 0 12 6a5.968 5.968 0 0 0-1.452-3.912Zm-3 6.084A2.7 2.7 0 0 1 6 8.664c-.576 0-1.11-.186-1.542-.498-.006.012-.012.024-.024.036l-2.34 2.346A5.952 5.952 0 0 0 6 12c1.5 0 2.868-.546 3.912-1.452l-2.34-2.346a.105.105 0 0 1-.024-.03Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'secondary-logo':
      return (
        <>
          <rect width={60} height={60} fill='#282828' rx={30} />
          <path
            fill='#fff'
            d='m33.07 19.991-.855-.053c-1.993 0-3.595.688-4.805 2.064-1.175 1.34-1.762 3.615-1.762 6.825 0 3.174.445 5.59 1.335 7.248.925 1.658 2.687 2.487 5.286 2.487 1.21 0 3.773-.811 7.689-2.434.89 1.234 1.37 2.522 1.442 3.862-1.958 1.2-3.88 2.134-5.767 2.804-1.851.67-3.168 1.006-3.951 1.006-4.379 0-7.654-1.182-9.825-3.545-2.172-2.399-3.257-5.75-3.257-10.053 0-9.735 4.431-14.602 13.295-14.602 1.53 0 3.097.194 4.699.582 1.637.352 2.919.81 3.844 1.375-.106 3.527-.498 6.085-1.174 7.672-1.175.282-2.83.423-4.966.423l-1.228-5.661Z'
          />
        </>
      );
    case 'up-arrow-icon':
      return (
        <>
          <path
            fill='#7B7A79'
            d='M9.746 8.636 5.989 5.1 2.233 8.636a.905.905 0 0 1-.616.231.903.903 0 0 1-.61-.241.8.8 0 0 1-.257-.575.798.798 0 0 1 .246-.58L5.37 3.354a.904.904 0 0 1 .62-.241c.231 0 .454.086.618.24l4.375 4.118c.083.076.15.167.196.268a.781.781 0 0 1-.185.907.88.88 0 0 1-.288.18.923.923 0 0 1-.96-.19Z'
          />
        </>
      );
    case 'down-arrow-icon':
      return (
        <>
          <path
            fill='#7B7A79'
            d='M9.746 3.364 5.989 6.9 2.233 3.364a.905.905 0 0 0-.616-.231.903.903 0 0 0-.61.241.8.8 0 0 0-.257.575.798.798 0 0 0 .246.58L5.37 8.646a.904.904 0 0 0 .618.241.904.904 0 0 0 .619-.24l4.375-4.118a.824.824 0 0 0 .196-.268.783.783 0 0 0-.185-.907.88.88 0 0 0-.288-.18.923.923 0 0 0-.96.19Z'
          />
        </>
      );
    case 'three-dot-icon':
      return (
        <>
          <path
            fill={fill}
            d='M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
          />
        </>
      );
    case 'back-icon':
      return (
        <>
          <path
            fill={fill}
            d='M11.514 12.994 6.801 7.986l4.713-5.009c.2-.22.311-.515.309-.82a1.204 1.204 0 0 0-.322-.815A1.067 1.067 0 0 0 10.734 1a1.065 1.065 0 0 0-.772.327l-5.49 5.834a1.205 1.205 0 0 0-.322.825c0 .309.116.606.322.824l5.49 5.834c.101.111.222.2.356.261a1.044 1.044 0 0 0 1.21-.247c.103-.11.185-.24.24-.383a1.23 1.23 0 0 0-.008-.902 1.17 1.17 0 0 0-.246-.379Z'
          />
        </>
      );
    case 'attach-icon':
      return (
        <>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.98778 12.0001C3.80098 12.0001 2.69638 11.5471 1.87558 10.7239C0.145776 8.98934 0.171691 6.14115 1.93329 4.37415L5.37011 0.92774C5.96711 0.32894 6.76022 -0.000457764 7.60502 -0.000457764C8.44982 -0.000457764 9.24248 0.32894 9.84008 0.92774C11.0713 2.16254 11.0713 4.17074 9.84008 5.40494L6.38642 8.86754C5.67602 9.57914 4.4371 9.58034 3.7267 8.86754C2.9947 8.13314 2.9947 6.93915 3.7267 6.20535L6.76024 3.16335C6.99484 2.92875 7.37408 2.92814 7.60868 3.16214C7.84388 3.39614 7.84385 3.77594 7.60985 4.01054L4.57631 7.05254C4.31051 7.31954 4.31051 7.75335 4.57631 8.02035C4.83371 8.27775 5.28001 8.27715 5.53681 8.02035L8.99047 4.55775C9.75547 3.79035 9.75547 2.54235 8.99047 1.77495C8.25007 1.03275 6.9607 1.03275 6.2203 1.77495L2.78349 5.22134C1.50969 6.49874 1.48377 8.63054 2.72577 9.87614C3.31917 10.4713 4.12317 10.7995 4.98837 10.7995C5.87637 10.7995 6.74291 10.4425 7.36391 9.81914L10.38 6.79394C10.6146 6.55934 10.9939 6.55875 11.2285 6.79275C11.4637 7.02675 11.4636 7.40654 11.2296 7.64114L8.21337 10.6664C7.36737 11.5142 6.19198 12.0001 4.98778 12.0001Z'
              fill='#7B7A79'
            />
          </svg>
        </>
      );
    case 'send-icon':
      return (
        <>
          <path
            fill={fill}
            d='M2.707 5.707 5 3.414V11a1 1 0 1 0 2 0V3.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414Z'
          />
        </>
      );
    case 'dot-icon':
      return (
        <>
          <path
            d='M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z'
            fill='#7B7A79'
          />
        </>
      );
    case 'priority-urgent-icon':
      return (
        <>
          <path
            fill='#313130'
            d='M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm-.45 3.3a.45.45 0 0 1 .9 0v2.743a.45.45 0 0 1-.9 0V3.3Zm.462 5.4a.603.603 0 0 1-.603-.6c0-.331.266-.6.597-.6h.006a.6.6 0 1 1 0 1.2Z'
          />
        </>
      );
    case 'priority-high-icon':
      return (
        <>
          <path
            fill='#313130'
            d='M1.846 6H.923C.413 6 0 6.448 0 7v4c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V7c0-.552-.413-1-.923-1ZM6.462 3h-.923c-.51 0-.924.448-.924 1v7c0 .552.414 1 .924 1h.923c.51 0 .923-.448.923-1V4c0-.552-.414-1-.923-1ZM11.077 0h-.923c-.51 0-.923.448-.923 1v10c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V1c0-.552-.413-1-.923-1Z'
          />
        </>
      );
    case 'priority-Medium-icon':
      return (
        <>
          <path
            fill='#313130'
            d='M1.846 6H.923C.413 6 0 6.448 0 7v4c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V7c0-.552-.413-1-.923-1ZM6.461 3h-.923c-.51 0-.923.448-.923 1v7c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V4c0-.552-.413-1-.923-1Z'
          />
          <path
            fill='#C4C3C1'
            d='M11.077 0h-.923c-.51 0-.923.448-.923 1v10c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V1c0-.552-.413-1-.923-1Z'
          />
        </>
      );
    case 'priority-low-icon':
      return (
        <>
          <path
            fill='#313130'
            d='M1.846 6H.923C.413 6 0 6.448 0 7v4c0 .552.414 1 .923 1h.923c.51 0 .923-.448.923-1V7c0-.552-.413-1-.923-1Z'
          />
          <path
            fill='#C4C3C1'
            d='M6.461 3h-.923c-.51 0-.923.448-.923 1v7c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V4c0-.552-.413-1-.923-1ZM11.077 0h-.923c-.51 0-.923.448-.923 1v10c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V1c0-.552-.413-1-.923-1Z'
          />
        </>
      );
    case 'priority-no-icon':
      return (
        <>
          <path
            fill='#C4C3C1'
            d='M1.846 6H.923C.413 6 0 6.448 0 7v4c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V7c0-.552-.413-1-.923-1ZM6.462 3h-.923c-.51 0-.923.448-.923 1v7c0 .552.413 1 .923 1h.923c.51 0 .923-.448.923-1V4c0-.552-.413-1-.923-1ZM11.077 0h-.924c-.51 0-.923.448-.923 1v10c0 .552.414 1 .923 1h.924c.51 0 .923-.448.923-1V1c0-.552-.414-1-.923-1Z'
          />
        </>
      );
    case 'error-icon':
      return (
        <>
          <path
            fill='#BC5749'
            d='M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm-.525 3.85a.525.525 0 0 1 1.05 0v3.2a.525.525 0 0 1-1.05 0v-3.2Zm.539 6.3a.703.703 0 0 1-.704-.7c0-.386.31-.7.697-.7h.007a.7.7 0 1 1 0 1.4Z'
          />
        </>
      );
    case 'google-icon':
      return (
        <>
          <path
            fill='#4280EF'
            d='M15.1 8.086c0-.49-.048-.996-.127-1.47H8.13v2.798h3.92a3.298 3.298 0 0 1-1.454 2.197l2.34 1.817c1.374-1.28 2.165-3.145 2.165-5.342Z'
          />
          <path
            fill='#34A353'
            d='M8.13 15.167c1.96 0 3.603-.648 4.804-1.754l-2.339-1.802c-.648.442-1.486.695-2.466.695-1.897 0-3.493-1.28-4.078-2.987l-2.403 1.85c1.233 2.45 3.73 3.998 6.481 3.998Z'
          />
          <path
            fill='#F6B704'
            d='M4.051 9.303c-.3-.901-.3-1.881 0-2.782L1.65 4.656a7.265 7.265 0 0 0 0 6.512L4.05 9.303Z'
          />
          <path
            fill='#E54335'
            d='M8.13 3.533a3.959 3.959 0 0 1 2.781 1.091l2.071-2.086A6.983 6.983 0 0 0 8.129.657a7.248 7.248 0 0 0-6.48 3.999L4.05 6.52c.585-1.723 2.181-2.988 4.078-2.988Z'
          />
        </>
      );
    case 'cross-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <mask
              id='b'
              width={12}
              height={12}
              x={0}
              y={0}
              maskUnits='userSpaceOnUse'
              style={{
                maskType: 'luminance',
              }}
            >
              <path fill='#fff' d='M12 0H0v12h12V0Z' />
            </mask>
            <g mask='url(#b)'>
              <path
                fill='#313130'
                d='M10.707 1.293a1 1 0 0 0-1.414 0L6 4.586 2.707 1.293a1 1 0 0 0-1.414 1.414L4.586 6 1.293 9.293a1 1 0 1 0 1.414 1.414L6 7.414l3.293 3.293a1 1 0 0 0 1.414-1.414L7.414 6l3.293-3.293a1 1 0 0 0 0-1.414Z'
              />
            </g>
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'plus-icon':
      return (
        <>
          <g clipPath='url(#a)'>
            <path
              fill='#282828'
              d='M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0V7h4a1 1 0 1 0 0-2Z'
            />
          </g>
          <defs>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h12v12H0z' />
            </clipPath>
          </defs>
        </>
      );
    case 'dropdown-unassign-icon':
      return (
        <>
          <path
            fill='#fff'
            d='M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z'
          />
          <path
            fill='#C4C3C1'
            d='M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm.008 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM10 18.5c-2.21 0-4.23-.85-5.74-2.24.44-1.38 1.58-2.69 4.03-2.69h3.42c2.44 0 3.58 1.32 4.03 2.69A8.456 8.456 0 0 1 10 18.5Z'
          />
        </>
      );
    case 'search-icon':
      return (
        <>
          <path
            fill='#7B7A79'
            d='M11.718 11.152 9.413 8.848A5.223 5.223 0 0 0 10.65 5.47 5.256 5.256 0 0 0 5.4.22 5.256 5.256 0 0 0 .15 5.47a5.256 5.256 0 0 0 5.25 5.25 5.223 5.223 0 0 0 3.377-1.236l2.305 2.304a.449.449 0 1 0 .636-.636ZM1.05 5.47A4.355 4.355 0 0 1 5.4 1.12a4.355 4.355 0 0 1 4.35 4.35A4.355 4.355 0 0 1 5.4 9.82a4.355 4.355 0 0 1-4.35-4.35Z'
          />
        </>
      );
  }
};

const SVGIcon = ({
  name = '',
  style = {},
  fill = '',
  viewBox = '',
  height = '24',
  width = '24',
  className = '',
  strokeWidth = 1.5,
  bgfill = 'none',
  stroke = '',
  stopColor = '',
  iconprimary = colors.icon,
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    {getPath(name, {
      fill,
      strokeWidth,
      bgfill,
      stroke,
      stopColor,
      iconprimary,
    })}
  </svg>
);

export default SVGIcon;
