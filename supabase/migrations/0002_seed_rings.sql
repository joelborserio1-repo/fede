-- Seed the collection with the six launch cuts.
-- Specs shown here surface only on the ring detail page.

insert into public.rings
  (slug, name, cut, tagline, description, guide_price_from, metals,
   carat_from, colour_grade, clarity_grade, cut_grade, certification, sort_order)
values
  (
    'round', 'Round', 'Round brilliant',
    'The classic. Maximum brightness, endlessly wearable.',
    'A round brilliant set simply on a fine band, made to order around the stone you choose with us. The most light-hungry of all the cuts, and the one most couples come back to.',
    2190, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 10
  ),
  (
    'oval', 'Oval', 'Brilliant',
    'Elongating and elegant on a fine tapered band.',
    'An elongating oval brilliant on a fine, tapered band. Quiet, classic, and made entirely to order around the stone you choose with us.',
    2290, '{"18ct yellow","18ct white","Platinum"}',
    0.75, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 20
  ),
  (
    'pear', 'Pear', 'Modified brilliant',
    'A soft point and a rounded shoulder. Distinctive without shouting.',
    'A pear modified brilliant, worn point down the finger for a flattering, lengthening line. Made to order in your metal and size.',
    2190, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Very Good', 'IGI / GIA certified', 30
  ),
  (
    'marquise', 'Marquise', 'Brilliant',
    'A vintage silhouette that reads far larger than its weight.',
    'A marquise brilliant with two tapered points, a nod to old-world jewellery that wears with real presence. Made to order around your stone.',
    2150, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Very Good', 'IGI / GIA certified', 40
  ),
  (
    'emerald', 'Emerald', 'Step cut',
    'Clean lines and quiet clarity. Understated and architectural.',
    'An emerald step cut, all straight lines and hall-of-mirrors depth. For those who want clarity over sparkle. Made to order in your chosen metal.',
    2390, '{"18ct yellow","18ct white","Platinum"}',
    0.80, 'E–F', 'VVS–VS', 'Excellent', 'IGI / GIA certified', 50
  ),
  (
    'radiant', 'Radiant', 'Mixed cut',
    'The brilliance of a round in a soft-cornered rectangle.',
    'A radiant mixed cut that pairs a step-cut outline with brilliant faceting, for fire and shape in equal measure. Made to order around the stone you choose with us.',
    2390, '{"18ct yellow","18ct white","Platinum"}',
    0.80, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 60
  )
on conflict (slug) do nothing;
