import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  image: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  updateProfile(event) {
    var reader = new FileReader();
    if (event.target.files.length > 0) {
      var file = event.target.files[0];

      reader.onload = function (upload) {
        this.image = upload.target.result;
        console.log(this.image);
      }.bind(this);
      reader.readAsDataURL(file);
      console.log("Uploaded");
    }
    else {
      this.image = '';
    }
    this.auth.updateProfileImage(this.image);
  }

}
