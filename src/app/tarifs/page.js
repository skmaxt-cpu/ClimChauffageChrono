export const metadata = {
  title: 'Tarifs et Forfaits - Clim Chrono',
  description: 'Consultez nos tarifs clairs et transparents pour la climatisation, les chaudières à gaz, les chauffe-eaux et les entretiens.',
  alternates: {
    canonical: 'https://www.chronoclim.fr/tarifs',
  },
};

import TarifsContent from './TarifsContent';

export default function Tarifs() {
  return <TarifsContent />;
}
