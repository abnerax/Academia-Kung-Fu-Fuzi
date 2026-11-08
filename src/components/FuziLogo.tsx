import React from 'react';

interface FuziLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  imgClassName?: string;
}

export const FuziLogo: React.FC<FuziLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  imgClassName = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-11 h-11', p: 'p-1', textTitle: 'text-sm', textSub: 'text-[9px]' },
    md: { box: 'w-15 h-15 sm:w-16 sm:h-16', p: 'p-1.5', textTitle: 'text-base', textSub: 'text-[11px]' },
    lg: { box: 'w-24 h-24 sm:w-28 sm:h-28', p: 'p-2', textTitle: 'text-xl', textSub: 'text-xs' },
    xl: { box: 'w-32 h-32 sm:w-36 sm:h-36', p: 'p-2.5', textTitle: 'text-2xl', textSub: 'text-sm' },
  };

  const current = sizeMap[size];
  const officialLogoUrl = '/images/logo_emblema.png';
  const cdnFallbackUrl = 'https://i.postimg.cc/wjkVSJ6G/Emblema-de-Academia-de-Kung-Fu-removebg-preview.png';

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Official Circular Logo Emblem with Clean White Background for Maximum Clarity */}
      <div
        className={`relative ${current.box} ${current.p} shrink-0 rounded-full bg-white shadow-lg shadow-black/50 ring-2 ring-[#C99A38]/80 flex items-center justify-center select-none overflow-hidden transition-transform`}
      >
        <img
          src={officialLogoUrl}
          alt="Logotipo Oficial da Academia Fuzi de Kung Fu"
          className={`w-full h-full object-contain filter drop-shadow-sm ${imgClassName}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== cdnFallbackUrl) {
              target.src = cdnFallbackUrl;
            }
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className={`font-bold tracking-wider text-[#F5F3EF] font-heading uppercase ${current.textTitle} leading-tight`}>
            Academia Fuzi
          </div>
          <div className={`text-[#C99A38] uppercase tracking-widest font-semibold ${current.textSub}`}>
            Kung Fu Wushu · Boxe Chinês
          </div>
        </div>
      )}
    </div>
  );
};
