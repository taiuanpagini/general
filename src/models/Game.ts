export interface IGame {
  active: boolean;
  players: Array<IPlayer>
}

export interface IPlayer {
  name: string;
  optionsNormal: Array<IOptions>
  optionsQuality: Array<IOptionsSpecial>
}

export interface IOptions {
  name: string;
  um: number;
  dois: number;
  tres: number;
  quatro: number;
  cinco: number;
  zero: number;
  selected?: number;
}

export interface IOptionsSpecial {
  name: string;
  primeira: number;
  demais: number;
  zero: number;
  selected?: number;
}

export const OptionsNormal = {
  um: 1,
  dois: 2,
  tres: 3,
  quatro: 4,
  cinco: 5,
  zero: 0
}

export const OptionsFula = {
  name: 'Fula',
  primeira: 35,
  demais: 30,
  zero: 0
}

export const OptionsQuadra = {
  name: 'Quadra',
  primeira: 45,
  demais: 40,
  zero: 0
}

export const OptionsSeqAlta = {
  name: 'Seq. Alta',
  primeira: 100,
  demais: 50,
  zero: 0
}

export const OptionsSeqBaixa = {
  name: 'Seq. Baixa',
  primeira: 100,
  demais: 50,
  zero: 0
}

export const OptionsTrinca = {
  name: 'Trinca',
  primeira: 100,
  demais: 50,
  zero: 0
}

export const OptionsGeneral = {
  name: 'General',
  primeira: 100,
  demais: 50,
  zero: 0
}

export const OptionsNameNormal = (i: number) => {
  const options = [
    {id: 1, name: 'No Áz'},
    {id: 2, name: 'No Dois'},
    {id:3,name: 'No Três'},
    {id:4,name: 'No Quatro'},
    {id:5,name: 'No Cinco'},
    {id:6,name: 'No Seis'}
  ]  

  const index = options.findIndex(x=> x.id === i)
  return options[index].name
}