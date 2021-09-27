import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

/**
 *
Public Key:
BDW6Ol23rK3SjjfgtQVmkKXsJ9hixYD7V45Z4Z87Hiu-_wtDIsu3g8sF5vYVPKD-GgGU_4cMcm627oGxKl0fLWA

Private Key:
C9kJ741VltpzSX-DAjyrkD2OYN31gKqC-NOGtg8omIA
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pwa';
  key = 'BDW6Ol23rK3SjjfgtQVmkKXsJ9hixYD7V45Z4Z87Hiu-_wtDIsu3g8sF5vYVPKD-GgGU_4cMcm627oGxKl0fLWA';
  constructor(
    private pushService: SwPush
  ) {

    if (pushService.isEnabled) {

      pushService.requestSubscription({
        serverPublicKey: this.key
      }).then((resp) => {
        console.log(JSON.stringify(resp));
      })

      pushService.messages.subscribe((msg: any) => {
        console.log({msg});
      })

    } else {
      alert('is not enabled');
    }

  }
}
