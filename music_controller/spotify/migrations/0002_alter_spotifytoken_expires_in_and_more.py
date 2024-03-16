# Generated by Django 5.0.1 on 2024-03-15 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("spotify", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="spotifytoken",
            name="expires_in",
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name="spotifytoken",
            name="refresh_token",
            field=models.CharField(max_length=150, null=True),
        ),
    ]