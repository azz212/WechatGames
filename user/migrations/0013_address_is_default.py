# Generated by Django 2.1.5 on 2020-11-17 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0012_userip_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='is_default',
            field=models.BooleanField(default=False, help_text='设置默认地址', verbose_name='是否为默认地址'),
        ),
    ]
