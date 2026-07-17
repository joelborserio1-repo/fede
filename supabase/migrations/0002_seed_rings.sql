-- Seed the collection with the seven named launch pieces.
-- Specs shown here surface only on the ring detail page.
-- Photography lives in the public Storage bucket `rings`.

insert into public.rings
  (slug, name, cut, tagline, description, guide_price_from, metals,
   carat_from, colour_grade, clarity_grade, cut_grade, certification, sort_order, hero_image)
values
  (
    'monaco', 'The Monaco', 'Emerald solitaire',
    'Clean lines and quiet clarity. Understated and architectural.',
    'An emerald step cut, all straight lines and hall-of-mirrors depth. For those who want clarity over sparkle. Made to order in your chosen metal.',
    2390, '{"18ct yellow","18ct white","Platinum"}',
    0.80, 'E–F', 'VVS–VS', 'Excellent', 'IGI / GIA certified', 10,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/01%20-%20The%20Monaco%20-%20Emerald%20Solitaire.png'
  ),
  (
    'florence', 'The Florence', 'Oval solitaire',
    'Elongating and elegant on a fine tapered band.',
    'An elongating oval brilliant on a fine, tapered band. Quiet, classic, and made entirely to order around the stone you choose with us.',
    2290, '{"18ct yellow","18ct white","Platinum"}',
    0.75, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 20,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/02%20-%20The%20Florence%20-%20Oval%20Solitaire.png'
  ),
  (
    'verona', 'The Verona', 'Marquise solitaire',
    'A vintage silhouette that reads far larger than its weight.',
    'A marquise brilliant with two tapered points, a nod to old-world jewellery that wears with real presence. Made to order around your stone.',
    2150, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Very Good', 'IGI / GIA certified', 30,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/03%20-%20The%20Verona%20-%20Marquise%20Solitaire.png'
  ),
  (
    'manhattan', 'The Manhattan', 'Elongated emerald solitaire',
    'A long, lean emerald that stretches the finger.',
    'An elongated emerald step cut on a fine band, all clean parallel lines and quiet depth. Architectural and modern, made to order around the stone you choose with us.',
    2490, '{"18ct yellow","18ct white","Platinum"}',
    0.80, 'E–F', 'VVS–VS', 'Excellent', 'IGI / GIA certified', 40,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/04%20-%20The%20Manhattan%20-%20Elongated%20Emerald%20Solitaire.png'
  ),
  (
    'kensington', 'The Kensington', 'Radiant solitaire',
    'The brilliance of a round in a soft-cornered rectangle.',
    'A radiant mixed cut that pairs a step-cut outline with brilliant faceting, for fire and shape in equal measure. Made to order around the stone you choose with us.',
    2390, '{"18ct yellow","18ct white","Platinum"}',
    0.80, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 50,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/05%20-%20The%20Kensington%20-%20Radiant%20Solitaire.png'
  ),
  (
    'riviera', 'The Riviera', 'Pear solitaire',
    'A soft point and a rounded shoulder. Distinctive without shouting.',
    'A pear modified brilliant, worn point down the finger for a flattering, lengthening line. Made to order in your metal and size.',
    2190, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Very Good', 'IGI / GIA certified', 60,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/06%20-%20The%20Riviera%20-%20Pear%20Solitaire.png'
  ),
  (
    'classic', 'The Classic', 'Round brilliant solitaire',
    'The classic. Maximum brightness, endlessly wearable.',
    'A round brilliant set simply on a fine band, made to order around the stone you choose with us. The most light-hungry of all the cuts, and the one most couples come back to.',
    2190, '{"18ct yellow","18ct white","Platinum"}',
    0.70, 'D–F', 'VS+', 'Excellent', 'IGI / GIA certified', 70,
    'https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings/07%20-%20The%20Classic%20-%20Round%20Brilliant%20Solitaire.png'
  )
on conflict (slug) do nothing;
