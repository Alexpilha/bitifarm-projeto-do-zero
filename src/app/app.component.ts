import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnalisesPage } from '../pages/analises/analises';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AnalistasPage } from '../pages/analistas/analistas';
import { ProgamacaoPage } from '../pages/progamacao/progamacao';
import { ForumPage } from '../pages/forum/forum';
import { RankingPage } from '../pages/ranking/ranking';
import { ComunidadePage } from '../pages/comunidade/comunidade';
import { IndicacoesPage } from '../pages/indicacoes/indicacoes';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { TradePage } from '../pages/trade/trade';
import { PublicarPage } from '../pages/publicar/publicar';
import { FundoPage } from '../pages/fundo/fundo';
import { ContaPage } from '../pages/conta/conta';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Noticias', component: NoticiasPage },
      { title: 'Análises', component: AnalisesPage },
      { title: 'Análistas BitFarm', component: AnalistasPage },
      { title: 'Progamação de lives', component: ProgamacaoPage },
      { title: 'Fórum', component: ForumPage },
      { title: 'Ranking dos pilas', component: RankingPage },
      { title: 'A comunidade', component: ComunidadePage },
      { title: 'Indicações', component: IndicacoesPage },
      { title: 'Pontuação', component: PontuacaoPage},
      { title: 'Sala de trade', component: TradePage },
      { title: 'Publicar Análises', component: PublicarPage },
      { title: 'Fundo de investimento', component: FundoPage },
      { title: 'Minha conta', component: ContaPage },
      { title: 'Sair', component: LoginPage },

    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
