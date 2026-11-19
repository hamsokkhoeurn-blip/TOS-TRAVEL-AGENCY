export function isoPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export function todayIso() {
  return isoPlus(0);
}
